import Button from 'react-bootstrap/Button';

function Apply() {
  const handleButtonClick = () => {
    window.open('https://forms.gle/2DvSRNtm4UhURNWeA', '_blank');
  };
  return (
    <div id="apply" className="section" style={{ paddingTop: "12%" }}>
      <h1 className="text-center">Apply Now</h1>
      <p style={{fontSize:"25px"}}>Applications for hackers are now open!!</p>
      <Button variant="light" onClick={handleButtonClick} >Submit Applications Here</Button>{' '}
    </div>
  );
} 
export default Apply;
