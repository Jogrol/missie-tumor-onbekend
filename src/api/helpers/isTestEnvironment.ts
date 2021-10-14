import { TestModeEnnum } from "../donate"

export const isTestEnvironment = (): boolean => {
  return process.env.PAY_TEST_MODE === TestModeEnnum.True ? true : false
}
