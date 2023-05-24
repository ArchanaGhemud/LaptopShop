import { Container,Button, Card, CardBody } from "reactstrap";
import React,{ useEffect} from "react";
const Contact=()=>{
    useEffect(()=>{
        document.title="LaptopShop ";
},[]);
    return(        
        <div>
             <Card className="text-center" border="success" >
             <CardBody>     
                 <p>Email Id - lappieworld123@gmail.com </p>
                 Phone Number - 9373502925 / 9665490973 <p/>
                    
                 
            <Container className="text-center">
            <Button color="primary" outline>Thank You...</Button>     
            </Container>
        </CardBody>
        </Card>  
        </div>
          );
        };
export default Contact;