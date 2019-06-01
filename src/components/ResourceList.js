import React from 'react';
import useResources from './useResources';

// class ResourceList extends React.Component {
//   state = {
//     resources: []
//   };
//   //   componentDidMount = async () => {
//   //     const response = await axios.get(
//   //       `https://jsonPlaceholder.typicode.com/${this.props.resource}`
//   //     );
//   //     this.setState({ resources: response.data });
//   //   };

//   render() {
//     console.log(this.state.resources);
//     return <div>{this.state.resources.length}</div>;
//   }

//   async componentDidUpdate(prevProps) {
//     if (prevProps.resource !== this.props.resource) {
//       const response = await axios.get(
//         `https://jsonPlaceholder.typicode.com/${this.props.resource}`
//       );
//       this.setState({ resources: response.data });
//     }
//   }
// }

const ResourceList = props => {
  //   const [resources, setResources] = useState([]);

  //   //this is fine
  //   // useEffect(() => {
  //   //   fetchResource(props.resource);
  //   // }, [props.resource]);
  //   // const fetchResource = async resource => {
  //   //     const response = await axios.get(
  //   //       `https://jsonPlaceholder.typicode.com/${props.resource}`
  //   //     );
  //   //     setResources(response.data);
  //   //   };

  //   //   return <div>{resources.length}</div>;

  //   //with async
  //   useEffect(() => {
  //     (async resource => {
  //       const response = await axios.get(
  //         `https://jsonPlaceholder.typicode.com/${resource}`
  //       );
  //       setResources(response.data);
  //     })(props.resource);
  //   }, [props.resource]);
  const resources = useResources(props.resource);
  return (
    <ul>
      {resources.map(record => (
        <li key={record.id}>{record.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;
