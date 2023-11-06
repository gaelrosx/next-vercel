import { MainLayout} from '../components/layouts/MainLayout'
import { WhiteLayout} from '../components/layouts/WhiteLayout'

export default function Contact() {
  return (
    <>
        <h1>Welcom Contact</h1>  

        <h3 className="title">
        Title Contact
        </h3>

        <p className="description">
            Get startd by editing
            <code className="code">pages/contact.tsx</code>
        </p>
    </>  
  )
}

Contact.getLayout =  function getLayout(page: JSX.Element) {
    return (
        <MainLayout>
            <WhiteLayout>
                {page}
            </WhiteLayout>

        </MainLayout>
    )
}
