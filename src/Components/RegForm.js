import  {useState} from 'react'

function Regform () {

    // const Home = ()=>{
    //   window.location.replace("http://localhost:3000/home/")
    // }
    const [Name, setName] = useState('');
    const [Department, setDepartment] = useState('');
    const handlesubmit = (e) =>{
        e.preventDefault();
        const blog = {Name, Department};
        console.log(blog);       
        fetch('http://localhost:3001/api/CreateParticipant',{
            method:'POST',
            headers:{"content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then((body)=>{
            console.log('NEW PARTICIPANT ADDED');
            console.log(body);
        })
        setName('');
        setDepartment('');
    }

    return(
        <div className="Reg_form">
            <div className="Sub_Page_Create">
                <br></br>
                <br></br>
                <div className="Create_Title">
                    <h1 className="text">Departments</h1>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <form  method="post">
                    <label className="label">Name</label><br></br><br></br>
                    <input type="text" name="Name" className="textbox" value={Name} onChange={(e)=>setName(e.target.value)}></input><br></br><br></br>
                    <label className="label">Department</label><br></br><br></br>
                    <input type="text" name="Department" className="textbox" value={Department} onChange={(e)=>setDepartment(e.target.value)}></input><br></br><br></br>
                    <button type="submit" className="label" onClick={handlesubmit}>INSERT</button>
                </form>
            </div>
        </div>
    )
}

export default Regform;