import React from 'react';
import PropTypes from 'prop-types';

export default function About(props) {
  console.log(props.mode);

  return (
    <>
      <h2
        className="AboutName"
        style={{ color: props.mode === 'dark' ? 'white' : 'black' }}
      >
        <strong>About Us:</strong>
      </h2>
      {/* Fixed typo from 'syle' to 'style' */}
      <div className="container">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                About TextUtils
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body"  style={{
          backgroundColor: props.mode === 'dark' ? 'rgb(4 92 165)' : 'white',
          color:  props.mode === 'dark' ? 'white' : 'black' }}>
                <strong>TextUtils Overview:</strong> TextUtils is a versatile
                application designed to simplify text manipulation tasks. With
                features to analyze, modify, and format text, it serves users
                needing quick solutions for text editing, word counting, case
                conversion, and more. This tool can be especially useful for
                writers, students, and professionals looking for easy-to-use text
                utilities.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Key Features
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body"  style={{
          backgroundColor: props.mode === 'dark' ? 'rgb(4 92 165)' : 'white',
          color:  props.mode === 'dark' ? 'white' : 'black' }} >
                <strong>Main Functionalities:</strong> TextUtils offers a variety
                of text manipulation options, such as changing text cases, counting
                words and characters, removing extra spaces, and generating previews.
                These tools help users in enhancing readability, maintaining
                consistency, and quickly adjusting text to meet specific requirements.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Usage Scenarios
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body"  style={{
          backgroundColor: props.mode === 'dark' ? 'rgb(4 92 165)' : 'white',
          color:  props.mode === 'dark' ? 'white' : 'black' }}>
                <strong>Practical Applications:</strong> TextUtils can be used for
                a variety of purposes, such as preparing written content for blogs,
                emails, and social media posts. Additionally, it can support academic
                tasks, content creation, and daily text formatting needs, making it
                an ideal utility for both casual and professional users.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

About.propTypes = {
  mode: PropTypes.string.isRequired,
};
