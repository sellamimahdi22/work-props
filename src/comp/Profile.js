import React from 'react';
import propTypes from 'prop-types'
 const Profile = ({mahdi,details}) => {
    return (
        <div>
            {mahdi.map(el=>
                <div style={{border:"1px solid black",color: "red", textAlign: "center "}} >               
                      <h1>{el.FullName}</h1>
                     <h1> {el.Bio}</h1>
                     <h1>{el.Profession}</h1> 
                     <button  onClick={()=>details(el.FullName)}  >View user profile</button>
                </div>)}
            
        </div>
    );
};
Profile.defaultProps = {
    FullName:"GUEST"
}

Profile.propTypes = {
    FullName:propTypes.string
}
export default Profile;