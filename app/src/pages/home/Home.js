import React from 'react'
import { useFormik } from 'formik'
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
        <Components.DivContent>
            <Components.Logo>
                <h3>Formulario</h3>
            </Components.Logo>
            <form onSubmit={formik.handleSubmit}>
                <Components.DivInputLabel>
                     <Components.Input
                    id="primeiroNome"
                    name='primeiroNome'
                    onChange={formik.handleChange}
                    value={formik.values.primeiroNome} 
                    type="text"
                     />
                </Components.DivInputLabel>
                <Components.DivInputLabel>
                <Components.Input
                    id="sobrenome"
                    name='sobrenome'
                    onChange={formik.handleChange}
                    value={formik.values.sobrenome} 
                    type="text"
                     />
                </Components.DivInputLabel>
                <Components.DivInputLabel>
                    <Components.Input
                    id="email"
                    name='email'
                    onChange={formik.handleChange}
                    value={formik.values.email} 
                    type="text"
                     />
                </Components.DivInputLabel>
                <Components.Button type="submit">Submit</Components.Button>
            </form>
        </Components.DivContent>
    </Components.DivMaior>
  )
}

export default Home