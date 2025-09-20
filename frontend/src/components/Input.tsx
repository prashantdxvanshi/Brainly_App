

const Input=({onchange,placeholder,ref}:{onchange?: ()=>void; placeholder: string,ref: any})=> {
  return (
    <div>
        <input ref={ref} type="text" placeholder={placeholder} onChange={onchange} className="px-4 py-2 border rounded m-2"/>
    </div>
  )
}

export default Input
