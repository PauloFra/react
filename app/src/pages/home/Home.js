import React from 'react'
import { useFormik } from 'formik'

import Logo from '../../images/logo-light.svg'
import Img from '../../images/graphic4.svg'
import * as Components from './Home.styles'
function Home() {

    const formik = useFormik({
      initialValues: {
        primeiroNome: '',
        sobrenome: '',
        email: '',
      },
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      },
    });
    return (
    <Components.DivMaior>
        <Components.DivLeft>
          <Components.DivContentLeft>
            <h2>Get more things done with Loggin platform.</h2>
            <p> Access to the most powerfull tool in the entire design and web industry.</p>
            <img src={Img} alt="" />
          </Components.DivContentLeft>
        </Components.DivLeft>
        <Components.DivContent>
            <Components.Logo>
                <img src={Logo} alt="" /> 
            </Components.Logo>
            <Components.DivBar>
            
             <a href="">
              <Components.DivBoxA>
               Login
              </Components.DivBoxA>
             </a>
            </Components.DivBar>
            <form onSubmit={formik.handleSubmit}>
                <Components.DivInputLabel>
                    <Components.Input
                    placeholder='Digite Seu Nome:'
                    id="primeiroNome"
                    name='primeiroNome'
                    onChange={formik.handleChange}
                    value={formik.values.primeiroNome} 
                    type="text"
                    />
                </Components.DivInputLabel>
                <Components.DivInputLabel>
                <Components.Input
                    placeholder='Digite Seu Sobrenome:'
                    id="sobrenome"
                    name='sobrenome'
                    onChange={formik.handleChange}
                    value={formik.values.sobrenome} 
                    type="text"
                     />
                </Components.DivInputLabel>
                <Components.DivInputLabel>
                    <Components.Input
                    placeholder='Digite Seu Email:'
                    id="email"
                    name='email'
                    onChange={formik.handleChange}
                    value={formik.values.email} 
                    type="text"
                     />
                </Components.DivInputLabel>
                <Components.DivInputLabel>
                  <Components.Button type="submit">Submit</Components.Button>
                </Components.DivInputLabel>  
              </form>
        </Components.DivContent>
    </Components.DivMaior>
  )
}

export default Home