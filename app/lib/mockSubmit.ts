// MOCK: set to false (or delete this file and its MOCK_SUBMIT usages) to send real requests.
export const MOCK_SUBMIT = false;

// MOCK: flip to true to preview the error state.
const MOCK_FORCE_ERROR = false;

export async function mockSubmit(): Promise<Pick<Response, "ok">> {
  await new Promise((resolve) => setTimeout(resolve, 900));
  return { ok: !MOCK_FORCE_ERROR };
}
