marked.setOptions({
  breaks: true,
})

const App = () => {
  const [text, setText] = React.useState('')

  const defaultState =
    '# This is a header \n## This is a sub header\n [This is a link](https://iwwan-01.github.io/digital-resume)\n\n`This is an inline code`\n```\nThis\nis\nmultiline\ncode\n```\n- This is a list item\n> This is a blockquote\n\n![This is an image](https://upload.wikimedia.org/wikipedia/commons/3/39/FreeCodeCamp_logo.png)\n\n**This is bold text**'
  React.useEffect(() => {
    setText(defaultState)
  }, [])

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
