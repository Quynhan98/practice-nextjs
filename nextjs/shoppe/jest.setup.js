import '@testing-library/jest-dom/extend-expect'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener() {},
      removeListener() {},
    }
  }
