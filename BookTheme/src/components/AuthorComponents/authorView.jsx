import React, {Component} from 'react' 
import { AUTHOR_TITLE, AUTHOR_SUBTITLE } from '../constants/authorconstants/authorconstants';
import SectionTitle from '../baseComponents/sectionTitle';
import AuthorCard from './authorCard';
import person1 from '../../Images/person1.jpg'
import person2 from '../../Images/person2.jpg'
import person3 from '../../Images/person3.jpg'
import person4 from '../../Images/person4.jpg'

export default class AuthorView extends Component {
    render() {
        return (
            <div id="authorSection" className="bg-light py-5">
                <div className="container">
                    <SectionTitle
                        Title={AUTHOR_TITLE}
                        subTitle={AUTHOR_SUBTITLE}
                    />
                    <div className="row mt-5">
                        <AuthorCard
                            authorImg={person1}
                            name= "Brock Blount"
                            jobDescription="Technical Consultant"
                            info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus maxime consequatur est, debitis laboriosam accusamus."
                        />
                        <AuthorCard
                            authorImg={person2}
                            name= "Brock Blount"
                            jobDescription="Technical Consultant"
                            info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus maxime consequatur est, debitis laboriosam accusamus."
                        />
                        <AuthorCard
                            authorImg={person3}
                            name= "Brock Blount"
                            jobDescription="Technical Consultant"
                            info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus maxime consequatur est, debitis laboriosam accusamus."
                        />
                        <AuthorCard
                            authorImg={person4}
                            name= "Brock Blount"
                            jobDescription="Technical Consultant"
                            info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus maxime consequatur est, debitis laboriosam accusamus."
                        />
                    </div>
                </div>
            </div>
        )
    }
}