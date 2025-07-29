import Accordion from './Accordion'
import './App.css'

function App() {

  // Accordion problem
  const items = [
    {
      title: "Javascript Basics",
      content: "Learn variable, functions and loops in Javascript."
    },
    {
      title: "React.js Overview",
      content: "Understand states, props, components in React."
    },
    {
      title: "Node.js",
      content: "Basic of server-side development with Node.js."
    },
    {
      title: "Full-Stake development",
      content: "Build full-stake apps with React and Node.js"
    },
  ]

  return (
    <>
      <div>
        {/* Accordion Problem */}
        <Accordion items={items}/>

      </div>
    </>
  )
}

export default App
