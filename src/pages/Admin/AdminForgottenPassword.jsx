import React from 'react'
import Header from '../../components/global/Header/Header'

const AdminForgottenPassword = () => {
  return (
    <div className='ForgottenPassword'>
    <Header/>   

    <div className='Whitebox'>
        <p className='text'>Forgotten Password?</p>
        <p className='text2'>Don't worry it occurs. Please enter your email address linked with your account</p>
    

    <div>
    <form action="">
            <div className='InputFields'>
            <label for="email" className='labelemail'>Enter your email</label>
                <input className='email' type="email" id="email" name="email" placeholder='yourname@gmail.com' />
            </div>
            <input className='SendBtn' type="submit" value="Send Code"/>
    </form>
    </div>
    <div className='bottomtext'>
        <p className='text3'><span className='browntext'>Remember Password?</span> <span className='bluetext'><a href="/admin-login">Log in</a></span></p>
    </div>
    </div>
</div> 
    )
}

export default AdminForgottenPassword