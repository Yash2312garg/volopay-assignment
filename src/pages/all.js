
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,

  MDBCardHeader
} from 'mdb-react-ui-kit';


const All =({card})=>{
    
    return (
      <MDBCard className='card'>
        <MDBCardHeader><MDBCardTitle>{card.name}|{card.budget_name}</MDBCardTitle>
       </MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle><b>spent:</b>{card.spent.value} {card.spent.currency}</MDBCardTitle>
        <MDBCardTitle><b>available_to_spend:</b>{card.available_to_spend.value} {card.available_to_spend.currency}</MDBCardTitle>
        <MDBCardTitle>{card.card_type}</MDBCardTitle>
        <MDBCardTitle><b>limit:</b>{card.limit}</MDBCardTitle>
        <MDBCardTitle><b>status:</b>{card.status}</MDBCardTitle>

      </MDBCardBody>
    </MDBCard>
    )
  }

export default All