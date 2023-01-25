const App = () => {
  const [text, setText] = React.useState('')

  return (
    <div className='text-center px-4'>
      <h1 className='p-4'>My Markdown Previewer</h1>
      <h3 className='my-3'>Editor</h3>
      <textarea
        name='text'
        id='editor'
        rows='10'
        value={text}
        onChange={(e) => setText(e.target.value)}
        className='textarea'
      ></textarea>
      <h3 className='my-3'>Output</h3>
      <Preview markdown={text} />
    </div>
  )
}

const Preview = ({ markdown }) => {
  return (
    <div
      id='preview'
      dangerouslySetInnerHTML={{
        __html: marked.parse(markdown),
      }}
    ></div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
