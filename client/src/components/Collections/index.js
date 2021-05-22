import React, { useState, useEffect } from "react";
import { useUserContext } from "../../utils/userContext";
import Card from "../Card";
import { Row, Col } from "../Grid";
import { Input, TextArea } from "../Form";
import { Table, TableHead, TableBody } from "../Table";
import API from "../../utils/API";
import { Modal, Button, Collapsible, CollapsibleItem } from "react-materialize";
import { Link, useParams } from "react-router-dom";

function Collections() {
  const [collection, setCollection] = useState({});
  const [formObject, setFormObject] = useState({});
  const { state } = useUserContext();

  const { id } = useParams();

  useEffect(() => {
    loadTrip();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function loadTrip() {
    API.getTrip(id)
      .then((res) => {
        setCollection(res.data.tripCollections);
      })
      .catch((err) => console.log(err));
  }

  function removeCategory(categoryId) {
    API.deleteCollection(categoryId)
      .then((res) => {
        loadTrip();
      })
      .catch((err) => console.log(err));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    console.log(state);
    event.preventDefault();
    if (formObject.collectionName) {
      API.createCollection(id, {
        collectionName: formObject.collectionName,
        collectionDescription: formObject.collectionDescription,
      })
        .then((res) => {
          console.log(res);
          loadTrip();
          handleFormClear();
        })
        .catch((err) => console.log(err));
    }
  }

  const handleItemEntry = (collectionId) => {
    // event.preventDefault();
    if (formObject.itemName) {
      console.log(formObject, collectionId);
      API.createCollectionItem(collectionId, {
        itemName: formObject.itemName,
        itemUrl: formObject.itemUrl,
        // itemDescription: formObject.itemDescription,
        itemSubmitter: state.firstName,
      })
        .then((res) => {
          loadTrip();
          handleFormClear();
        })
        .catch((err) => console.log(err));
    }
  };

  function handleFormClear() {

    document.getElementById("add-collection-form").reset();

    setFormObject({
        collectionName: "",
        collectionDescription: "",
        itemName: "",
        itemUrl: "",
        // itemDescription: ""
    });
};

  return (
    <>
      <Card>
        <Row>
          <Col size="m12 s12">
            <h1>Idea Board</h1>
            <br></br>
            <Modal
              actions={[
                <Button flat modal="close" node="button" waves="green">
                  Close
                </Button>,
                <Button className="modal-close" onClick={handleFormSubmit}>Add</Button>
              ]}
              bottomSheet={false}
              fixedFooter={false}
              header="Add a Category"
              id="Modal-0"
              open={false}
              options={{
                // container: "body",
                dismissible: true,
                endingTop: "10%",
                inDuration: 250,
                opacity: 0.5,
                outDuration: 250,
                preventScrolling: true,
                startingTop: "4%",
              }}
              trigger={<Link to="" node="button" className="btn-small transparentBG link-btn">+ Add a Category</Link>}
            >
              <form id="add-collection-form">
                <Input
                  onChange={handleInputChange}
                  name="collectionName"
                  placeholder="Name of the Category, i.e. Restaurants or Hotels"
                />
                <TextArea
                  onChange={handleInputChange}
                  name="collectionDescription"
                  placeholder="(Optional) Add any necessary details here"
                />
                
              </form>
            </Modal>
          </Col>
        </Row>
        <Row>
          <Col size="m12 s12">
            {collection.length ? (
              <Collapsible accordion={false}>
                {collection.map((collect, index) => (
                  <CollapsibleItem
                    key={index}
                    expanded={false}
                    header={collect.collectionName}
 
                    node="div"
                  >
                    {collect.collectionDescription}
                    
                    <br></br>
                    <br></br>
                    <Modal
                      actions={[
                        <Button flat modal="close" node="button" waves="green">
                          Close
                        </Button>,
                        <Button className="modal-close" onClick={() => handleItemEntry(collect._id)}>
                        Add
                      </Button>
                      ]}
                      bottomSheet={false}
                      fixedFooter={false}
                      header="Add an Item"
                      id="collectionItem"
                      className="modal"
                      open={false}
                      options={{
                        container: "body",
                        dismissible: true,
                        endingTop: "10%",
                        inDuration: 250,
                        opacity: 0.5,
                        outDuration: 250,
                        preventScrolling: true,
                        startingTop: "4%",
                      }}
                      trigger={
                        <Link node="button">
                          + Add an Item to this Collection
                        </Link>
                      }
                    >
                      
                      {/* <form> */}
                      <Input
                        onChange={handleInputChange}
                        name="itemName"
                        value={formObject.itemName}
                        placeholder="Item Name"
                      />
                      <Input
                        onChange={handleInputChange}
                        name="itemUrl"
                        value={formObject.itemUrl}
                        placeholder="(Optional) Enter a link"
                      />
                      {/* <TextArea
                        onChange={handleInputChange}
                        name="itemDescription"
                        value={formObject.itemDescription}
                        placeholder="(Optional) Add a description"
                      ></TextArea> */}
                      
                      {/* </form> */}
                    </Modal>

                    {collect.collectionItems.length ? (
                      <Table>
                        <TableHead>
                          <th>Idea</th>
                          <th>Link</th>
                          <th>By</th>
                        </TableHead>
                        <TableBody>
                          {collect.collectionItems.map((item, index) => (
                            <tr key={index}>
                              <td>{item.itemName}</td>
                              <td>
                                <a href={item.itemUrl} target="_blank" rel="noreferrer">
                                <i class="material-icons">link</i>
                                </a>
                              </td>
                              <td>{item.itemSubmitter}</td>
                            </tr>
                          ))}
                        </TableBody>
                        
                      </Table>
                    ) : (
                      <p>to get started</p>
                    )}
                    <br></br>
                    <Link onClick={(() => removeCategory(collect._id))} className="transparentBG btn-flat red-text">Delete Category</Link>
                  </CollapsibleItem>
                ))}
              </Collapsible>
            ) : (
              <p>No idea categories started yet!</p>
            )}
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default Collections;
