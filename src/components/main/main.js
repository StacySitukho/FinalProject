import './main.css'
import {Route, Routes} from "react-router-dom";
import Key from "../../artcomps/key/key";
import Course from "../../artcomps/course/course";
import Benefit from "../../artcomps/benefit/benefit";
import Contacts from "../../artcomps/contacts/contacts";
import Form from "../../artcomps/form/form";
import Policy from "../../policy/policy.docx";
import Error from "../../artcomps/error/error";
export default function Main() {
    return (
        <div className='Main'>
            <Routes>
                <Route path="/" element={<Key/>}/>
                <Route path="/course" element={<Course/>}/>
                <Route path="/benefits" element={<Benefit/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/form" element={<Form/>}/>
                <Route path="/policy" element={<Policy/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </div>
    );
}