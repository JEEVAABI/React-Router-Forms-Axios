import React, { Component } from 'react'

export class CV extends Component {
  render() {
    return (
      <React.Fragment>
      <header>
		    <div>
			    <h1>Jeeva Abishake</h1>
			    <h2>Full Stack Developer</h2>
          </div>
          <div>
		       <img src="./src/components/CvCompoenent/img/profile.jpg" alt="Profile Picture"/>
           </div>
	
	    </header>
	    <main>
		    <section>
			    <h3>Contact</h3>
			      <ul>
				      <li><label>Email:</label> jeevaabishake@gmail.com</li>
				      <li><label>Phone:</label> 805666***</li>
				      <li><label>Address:</label> chennai</li>
			      </ul>
		    </section>
		    <section>
			    <h3>Skills</h3>
			    <ul>
				    <li>HTML</li>
				    <li>CSS</li>
				    <li>JavaScript</li>
				    <li>PHP</li>
				    <li>MySQL</li>
			    </ul>
		    </section>
		    <section>
			    <h3>Experience</h3>
			    <p><strong>Full Stack Developer</strong>, --- Company</p>
			    <p><em>June 2024 - Present</em></p>
			    <ul>
				    <li>Developed and maintained company website using HTML, CSS, and JavaScript</li>
				    <li>Implemented responsive design for mobile devices using CSS media queries</li>
				    <li>Created and managed MySQL databases for the website</li>
			    </ul>
			  </section>
		    <section>
			    <h3>Education</h3>
			    <p><strong>Bachelor of Technology in Artificial Intelligence and machine learning</strong>, Saveetha Engineering College</p>
			    <p><em>November 2021 - june 2024</em></p>
			    <p>Courses included: Artificial Intelligence, Data Structures, Algorithms, Web Development, Database Management, Data Science, Machine Learning</p>
		    </section>
	    </main>

     </React.Fragment>
      
    )
  }
}

export default CV