import { Fragment, useState } from "react";
import { Col, Card, Modal, ListGroup, Image } from "react-bootstrap";

function Murder_in_sql_city_modal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      scrollable={true}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Murder in SQL City
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="left-border">
          <h5>About this project</h5>
          <p className="f-sm">
            I am a detective and there's been a Murder in SQL City! My partner gave me the crime scene report, but I somehow lost it. I vaguely remember that the crime was a murder that occurred sometime on Jan. 15, 2018, and that it took place in SQL City. My job is to find the murderer.
          </p>
        </div>
        <div className="left-border mt-4">
          <h5>Background</h5>
          <p className="f-sm">
            The idea for this project comes from UDACITY. The SQL Murder Mystery was created by Joon Park and Cathy He while they were Knight Lab fellows. See the GitHub repository for more information. Original code for this project is released under the MIT License Original text and other content for this project is released under Creative Commons CC BY-SA 4.0 This mystery was inspired by a crime in the neighbouring Terminal City.
          </p>
        </div>
        <div className="left-border mt-4">
          <h5>Skills I will use</h5>
          <ListGroup as="ol" variant="flush" className="f-sm">
            <ListGroup.Item as="li">
              SQL query to retrieve data from database.
            </ListGroup.Item>
          </ListGroup>
        </div>
        <div className="left-border mt-4">
          <h5>Schema diagram</h5>
          <Image src="images/projects/sql/murder_in_sql_city/schema_diagram.jpg" fluid={true}/>        
        </div>

        <div className="mt-5">
          <h4><strong>PART 1 - Crime Scene Report</strong></h4>
          <ListGroup as="ol" variant="flush" className="f-sm" numbered>
            <ListGroup.Item as="li" className="pb-0">
              The first thing to do is query the crime scene report database. <br /> <div className="ml-3">I have to look for murders that happened in SQL City, and we know the crime happened on 2018-01-15.</div>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="pb-0 pt-2">
              I have found the report:<br /><div className="ml-3">
              Security footage shows that there were 2 witnesses. The first witness lives at the last house on "Northwestern Dr". The second witness, named Annabel, lives somewhere on "Franklin Ave".
              </div>
              <Image src="images/projects/sql/murder_in_sql_city/part1.png" className="ml-3"/>
            </ListGroup.Item>
          </ListGroup>
        </div>
        <div className="mt-5">
          <h4><strong>PART 2 - Witnesses</strong></h4>
          <p className="f-sm">
            We got some information about the 2 witnesses. Based on this information, I am going to find more details about them from the person table.
          </p>
          <div className="left-border mt-4">
            <Image src="images/projects/sql/murder_in_sql_city/witness_1.png"/>         
            <p className="f-sm">id - 14887 <br />
            name - Morty Schapiro <br />
            license_id - 118009 <br />
            address_number - 4919 <br /> address_street_name - Northwestern Dr <br />
            ssn - 111564949
            </p>
            </div>
            <div className="left-border mt-4">
            <Image src="images/projects/sql/murder_in_sql_city/witness_2.png"/>         
            <p className="f-sm">id - 16371 <br />
            name - Annabel Miller <br />
            license_id - 490173 <br />
            address_number - 103 <br />
            address_street_name - Franklin Ave <br />
            ssn - 318771143
            </p>
            </div>
            So, I got all information about the witnesses, let's interview them.
        </div>
        <div className="mt-5">
          <h4><strong>PART 3 - Interview</strong></h4>
          <p className="f-sm">
            I will use the interview table to get information about the murderer.
          </p>
          <div className="left-border mt-4">
            <Image src="images/projects/sql/murder_in_sql_city/interview_1.png"/>         
            <p className="f-sm">"I heard a gunshot and then saw a man run out. He had a "Get Fit Now Gym" bag. The membership number on the bag started with "48Z". Only gold members have those bags. The man got into a car with a plate that included "H42W"."
            </p>
            </div>
            <div className="left-border mt-4">
            <Image src="images/projects/sql/murder_in_sql_city/interview_2.png"/>         
            <p className="f-sm">I saw the murder happen, and I recognized the killer from my gym when I was working out last week on January the 9th.
            </p>
            </div>
            I got information about the murderer. Let's catch him!
        </div>
        <div className="mt-5">
          <h4><strong>PART 4 - Get the Murderer</strong></h4>
          <p className="f-sm">
            I will create a view and join tables to get the results.
          </p>
          <div className="left-border mt-4">
            <Image src="images/projects/sql/murder_in_sql_city/catch_murder.png"/>         
            <p className="f-sm"><strong>Murderer name</strong> : Jeremy Bowers
            </p>
            <p className="f-sm">I did interview him.
            </p>
            <p className="f-sm">"I was hired by a woman with a lot of money. I don't know her name but I know she's around 5'5" (65") or 5'7" (67"). She has red hair and she drives a Tesla Model S. I know that she attended the SQL Symphony Concert 3 times in December 2017."
            </p>
            </div>
        </div>
        <div className="mt-5">
          <h4><strong>PART 5 - ENDGAME</strong></h4>
          <p className="f-sm">
            I have found out, the murderer was hired by a woman. Let's catch her!
          </p>
          <div className="left-border mt-4">
            <Image src="images/projects/sql/murder_in_sql_city/endgame.png"/>         
            <p className="f-sm">
            name - Miranda Priestly <br />
            address_number - 1883 <br />
            address_street_name - Golden Ave <br />
            event_name - SQL Symphony Concert
            Number_of_events - 3
            </p>
            </div>
        </div>
        <p><strong>I put these 2 people in prison.</strong></p>
        <p><strong>SQL City is happy again!</strong></p>
      </Modal.Body>
    </Modal>
  );
}

const Murder_in_sql_city = () => {
  const [murder_in_sql_cityModalShow, setMurder_in_sql_city] = useState(false);
  return (
    <Fragment>
      <Murder_in_sql_city_modal
        show={murder_in_sql_cityModalShow}
        onHide={() => setMurder_in_sql_city(false)}
      />
      <Col>
        <Card
          onClick={() => {
            setMurder_in_sql_city(true);
          }}
          style={{ cursor: "pointer" }}
          className="card_scale"
        >
          <Card.Img
            variant="top"
            src="images/projects/sql/murder_in_sql_city/profile.png"
          />
          <Card.Body>
            <Card.Title>Murder in SQL City</Card.Title>
            <Card.Text>SQL</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Fragment>
  );
};

export default Murder_in_sql_city;
