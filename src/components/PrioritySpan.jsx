const prioritySpan = styled.span`
  /* Adapt the colors based on primary prop */
  background-color: ${props => {
    if(props.priority === "high"){
      return "red"
    }
    else if(props.priority === "medium"){
       return "yellow"
    }
       else if(props.priority === "low"){
       return "green"
       }
       else{
         return "white"
       }
       }};
  
`;
render(
  <div>
    {/* <prioritySpan high>Normal</prioritySpan> */}
  </div>
);

export default PrioritySpan