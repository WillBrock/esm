import assert from "assert"
import * as customNs from "../../fixture/cjs/export/pseudo-custom.mjs"
import * as defaultNs from "../../fixture/cjs/export/nothing.mjs"
import * as noNs from "../../fixture/export/abc.mjs"

const customValue = require("../../fixture/cjs/export/pseudo-custom.mjs")
const defaultValue = require("../../fixture/cjs/export/nothing.mjs")
const noValue = require("../../fixture/export/abc.mjs")

export default () => {
  const partialDescriptor = {
    configurable: false,
    enumerable: true
  }

  const defaultDescriptor = {
    configurable: false,
    enumerable: false,
    value: true,
    writable: false
  }

  function getPartialDescriptor(object, name) {
    const descriptor = Object.getOwnPropertyDescriptor(object, name)

    return {
      configurable: descriptor.configurable,
      enumerable: descriptor.enumerable
    }
  }

  assert.strictEqual(Object.getOwnPropertyDescriptor(defaultNs, "__esModule"), void 0)
  assert.deepStrictEqual(Object.getOwnPropertyDescriptor(defaultValue, "__esModule"), defaultDescriptor)

  assert.deepStrictEqual(getPartialDescriptor(customNs, "__esModule"), partialDescriptor)
  assert.deepStrictEqual(getPartialDescriptor(customValue, "__esModule"), partialDescriptor)

  assert.strictEqual(Object.getOwnPropertyDescriptor(noNs, "__esModule"), void 0)
  assert.strictEqual(Object.getOwnPropertyDescriptor(noValue, "__esModule"), void 0)
}
