import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function TextForm(props) {
  const [text, setText] = useState('');
  const [findText, setFindText] = useState('');
  const [replaceText, setReplaceText] = useState('');
  const [highlightText, setHighlightText] = useState('');
  const [highlightedText, setHighlightedText] = useState('');

  const handleUpCase = () => {
    setText(text.toUpperCase());
  };

  const handleLoCase = () => {
    setText(text.toLowerCase());
  };

  const clearText = () => {
    setText('');
    setHighlightedText(''); // Clear highlighted text as well
  };

  const copyText = () => {
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
    alert("Text copied to clipboard!");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const ExtraSpace = () => {
    setText(text.trim().replace(/\s+/g, ' '));
  };

  const handleFindAndReplace = () => {
    const newText = text.split(findText).join(replaceText);
    setText(newText);
  };

  // Get the highlighted text but don't update the original text state.
  const getHighlightedText = (text, highlight) => {
    if (!highlight) return text;  // If no highlight text is provided, return the original text.

    // Create a regular expression to find the highlight text (case-insensitive, global search).
    const regex = new RegExp(`(${highlight})`, 'gi');

    // Replace all occurrences of the highlight text with a span tag that highlights the text.
    return text.replace(regex, (match) => 
      `<span style="background-color: yellow; font-weight: bold">${match}</span>`
    );
  };

  // Function to handle highlight when the button is clicked
  const handleHighlightText = () => {
    setHighlightedText(getHighlightedText(text, highlightText)); // Set the highlighted text separately
  };

  return (
    <>
      <div className={`container my-3 ${props.mode === 'dark' ? 'text-white' : 'text-dark'}`}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            placeholder="Enter text here"
            rows="8"
          ></textarea>
        </div>
        <ul className="list-unstyled">
          <li>
            <button className="btn btn-primary mx-2 my-1" onClick={handleUpCase}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleLoCase}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2 my-1" onClick={clearText}>Clear Text</button>
            <button className="btn btn-primary mx-2 my-1" onClick={copyText}>Copy Text</button>
            <button className="btn btn-primary mx-2 my-1" onClick={ExtraSpace}>Remove Extra Spaces</button>
          </li>
          <li className="my-2">
            <div className="d-flex">
              <div className="me-2">
                <input
                  style={{ width: '100px' }} 
                  type="text"
                  className="form-control mx-2"
                  placeholder="Find"
                  value={findText}
                  onChange={(e) => setFindText(e.target.value)}
                />
                <input
                  style={{ width: '100px' }} 
                  type="text"
                  className="form-control mx-2"
                  placeholder="Replace"
                  value={replaceText}
                  onChange={(e) => setReplaceText(e.target.value)}
                />
                <button className="btn btn-primary mx-2 my-1" onClick={handleFindAndReplace}>Find and Replace</button>
              </div>
              <div>
                <input
                  style={{ width: '100px' }} 
                  type="text"
                  className="form-control mx-2"
                  placeholder="Highlight Text"
                  value={highlightText}
                  onChange={(e) => setHighlightText(e.target.value)}
                />
                <button className="btn btn-primary mx-2 my-1" onClick={handleHighlightText}>Highlight Text</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className={`container ${props.mode === 'dark' ? 'text-white' : 'text-dark'}`}>
        <h3>Your Text Summary</h3>
        <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} words, {text.length} characters</p> {/*one method of couting number of words*/}
        <p>{0.008 * text.split(/\s+/).filter(word => word.length > 0).length} minutes read</p> {/*Another method of couting number of words*/}
        <h3>Preview</h3>
        <div 
          dangerouslySetInnerHTML={{
            __html: highlightedText // Render the highlighted text (not the original text)
          }} 
        />
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string,
};


//remember onClick requires function name not the function call .
//(/\s+/) is written so that the one or more spaces(new lines included) is counted properly else if we wrote(" ")
//it would act only for a space but not for more than one space .