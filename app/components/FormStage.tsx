"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import type { AnimalSweep } from "@/config/config";
import { MOCK_SUBMIT } from "../lib/mockSubmit";
import type { Status } from "../lib/useFormSubmit";

const SWEEP_MS = 2600;

type Phase = "form" | "leaving" | "done";

type FormStageProps = {
  status: Status;
  animal: AnimalSweep;
  success: ReactNode;
  onReplay: () => void;
  children: ReactNode;
};

export default function FormStage({
  status,
  animal,
  success,
  onReplay,
  children,
}: Readonly<FormStageProps>) {
  const stageRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<Phase>("form");
  const [lockedHeight, setLockedHeight] = useState<number>();

  useEffect(() => {
    if (status !== "success") {
      setPhase("form");
      setLockedHeight(undefined);
      return;
    }
    setLockedHeight(stageRef.current?.offsetHeight);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("done");
      return;
    }
    setPhase("leaving");
    const timer = setTimeout(() => setPhase("done"), SWEEP_MS);
    return () => clearTimeout(timer);
  }, [status]);

  const style = {
    minHeight: lockedHeight,
    "--sweep-duration": `${SWEEP_MS}ms`,
    "--animal-scale": animal.scale ?? 1,
    "--animal-flip": animal.flip ? -1 : 1,
  } as CSSProperties;

  return (
    <div
      ref={stageRef}
      className={`form-stage form-stage--from-${animal.from}`}
      style={style}
    >
      {phase !== "done" && (
        <div
          className={`form-stage__body rsvp-form__body ${
            phase === "leaving" ? "form-stage__body--leaving" : ""
          }`}
          aria-hidden={phase === "leaving"}
        >
          {children}
        </div>
      )}
      {phase !== "form" && (
        <div className="form-stage__result">
          <output className="rsvp-form__success">{success}</output>
          {MOCK_SUBMIT && phase === "done" && (
            <button
              type="button"
              className="form-stage__replay"
              onClick={onReplay}
            >
              ↺ Replay (mock)
            </button>
          )}
        </div>
      )}
      {phase === "leaving" && (
        <div className="form-stage__animal" aria-hidden>
          <div className="form-stage__animal-rock">
            <img alt="" src={animal.src} className="form-stage__animal-img" />
          </div>
        </div>
      )}
    </div>
  );
}
