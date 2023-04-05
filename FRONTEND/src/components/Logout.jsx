import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () =>{

    const history = useNavigate()

    const logout = async() => {
        try {
            const res = await fetch('/logout', {
                method : "GET",
                headers : {
                    Accept : "application/json"
                },
                credentials : "include"
            });
            if(res.status === 401 || !res){
                window.alert("Please Logout Later");
            }else{
                history.push('/');
                window.location.reload()
            }
        } catch(error){
            console.log(error)
        }
    }

    useEffect(() =>{
        logout();
    }, []);

    return(
        <div> 
            <section id="exercise">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-12">
                            <br /><br /><br /><br />
                            <h1 className="display-6 text-center mb-4">
                                You've been logged out!
                            </h1>
                            <hr className="w-15 mx-auto" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
        );
}
export default Logout;