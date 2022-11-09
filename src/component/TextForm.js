import React,{useState} from "react";

const TextForm = (props) => {
    const[text,setText] = useState("")

    const handleUpClick=() =>{
        // console.log("you have clicked"+text);
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to upperCase","success")


    }

    const handleLoClick=()=>{
      let newtext = text.toLowerCase();
      setText(newtext)
      props.showAlert("Converted to lowercase","success")

    }
      const textClear = ()=>{
        setText("")
        props.showAlert(" Text is cleared","success")
      }
     
      const reverseText = ()=>{
        let newtext = text.split('').reverse().join('')
        setText(newtext)
        props.showAlert(" Text is reversed","success")
      }

      const capitalizeFirstLet = () => {     

        let firstLett = text.charAt(0);
        let newLetter= firstLett.toUpperCase(); 
        setText(newLetter+text.slice(1))
        props.showAlert(" Text is capatialized","success")

    }

    const handleFirstLetterUppercase = () =>{
      function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
      }
      const upper = text.split(' ').map(capitalize).join(' ');
      setText(upper)
      props.showAlert(" Text is capitalized","success")
    }

     
    //("" --code  with harry methos")
    // const haha =(event) =>{
    //     console.log("On change");
    //     setText(event.target.value);
    // }
  return (
         <>
    <div className="container" style = {{ color:props.mode==='light'?'black':'white'}} >
        <h1>{props.heading}</h1>
        <div className="form-group">
          <label htmlFor="MyBox"></label>
          <textarea className="form-control" value={text} style = {{backgroundColor:props.mode==='dark'?'#000106':'white',color:props.mode==='light'?'black':'white'}}  id="MyBox" onChange={(event)=> setText(event.target.value)} rows="9"></textarea>
        </div> <br />
        <button  className="btn btn-primary mx-2" onClick={()=> handleUpClick() } >Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={()=> handleLoClick()}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={()=> textClear()}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={()=> reverseText()}>Reverse Text</button>
        <button className="btn btn-primary mx-2" onClick={()=> capitalizeFirstLet() }>First letter captial</button>
        <button className="btn btn-primary mx-2" onClick={()=>  handleFirstLetterUppercase() }>first capitial of each word</button>
    </div>
    <div className="container my-3"  style = {{ color:props.mode==='light'?'black':'white'}}>
      <h2> Your Text summary is of :: </h2>
      <p> {text.split(" ").length} words, {text.length} character</p>
      <p>{0.08*text.split(" ").length} minutes to read this text</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the given textbox..."}</p>
    </div>
         </>
  );
};

export default TextForm;
