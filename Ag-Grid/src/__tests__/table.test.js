import { cleanup, fireEvent, queryByTitle, render } from "@testing-library/react";
import renderer from "react-test-renderer"
import App from "../App";
import TableView from "../components/table";
import TablePreView from "../components/tablePreview";
import moment from 'moment'
import TablePreViewTab from "../components/previewTab";

afterEach(cleanup)

it("renders main app",()=>{
    render(<App />)
})


describe("hook",()=>{
    it('renders default text', () => {
      const { container } = render(<TableView/>)
    container.querySelector('Name')
    });
    })
it("renders table",()=>{
    render(<TableView />)
})


test("decimal counts", ()=>{
  function decimalCount () {
    const {getByTestId} =render(<TablePreView/>);
    const number = getByTestId("num");
    if (number.includes('.')) 
   return len= number.split('.')[0].length;
    expect(len).toBe(2)
  }
expect({decimalCount})
})

it('DATE FORMAT', () => {  
 
  function DateFormat()
  {

  const {getAllByTestId} =render(<TablePreView/>);
  const date = getAllByTestId("datetoLocal");
  const dateString = date.toString()
const   format = 'MM.DD.YYYY';
    const value = valueToDate(dateString, format);
    expect(value).toEqual(moment(dateString, format));
  };
});

it('should render pdf button', () => {
  const {queryByTitle} =render(<TablePreView/>);
  const pdf = queryByTitle("button-pdf");
  expect(pdf).toBeTruthy()
});


it('DATE FORMAT', () => {  
  function dateValid(date){

    if (  /^\d\d\/\d\d\/\d\d\d\d$/.test(date) ) {
  }
  
}
const {getAllByTestId} =render(<TablePreViewTab/>);
const date = getAllByTestId("datetoLocal");
expect(dateValid(date))
});



it('DATEs FORMAT', () => { 
function isValidDate() {
  const {getAllByTestId} =render(<TablePreView/>);
  const date = getAllByTestId("datetoLocal");
  const dateString = date.toString()
  var parts =dateString.split('/');
  var result;
  var mydate = new Date(parts[2],parts[1],parts[0]);
  if (parts[2] == mydate.getYear() && parts[0] == mydate.getMonth() && parts[1] == mydate.getDate() )
  {result=0;}
  else
  {result=1;}
  return(result);
}

expect(isValidDate()).toBeTruthy()

});
/*
it ("matches snapshot", ()=>{
  const tree= renderer.create(<App />);
  expect(tree).toMatchSnapshot();
  })

*/