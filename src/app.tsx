import { Collapse } from './components/collapse/collapse'

export function App() {
  console.log("I am inside App")

  return (
    <div className="">
      <h1>
        Some header
      </h1>
      <p>
        The fixed point that the element rotates around — mentioned above — is also known as the transform origin. This defaults to the center of the element, but you can set your own custom transform origin using the transform-origin property.
      </p>
      <Collapse>
        <div style={{ marginTop: 20 }}>
          <button>
            test
          </button>
          <p>
            This configuration tells ESLint to:
            Warn on unused variables ('warn')
            Apply the rule to all variables
            Only warn about unused function arguments after the last used one
            Ignore unused rest siblings (common in object destructuring)
            3. Optional: Disable base ESLint no-unused-vars
            If you're using TypeScript, you may want to disable the base ESLint rule to avoid duplication/conflicts:
          </p>
          <input type="text" defaultValue="abc" />
        </div>
      </Collapse>
    </div>
  )
}
