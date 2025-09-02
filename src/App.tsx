import { gql, useQuery } from "@apollo/client";

const GET_TEACHERS_QUERY = gql`
  {
    listTeacher {
      id
      name
    }
  }
`;

interface Teacher {
  id: string;
  name: string;
}

function App() {
  const { data } = useQuery<{ listTeacher: Teacher[] }>(GET_TEACHERS_QUERY);

  console.log(data);

  return (
    <ul>
      {data?.listTeacher.map((teacher) => {
        return <li key={teacher.id}>{teacher.name}</li>;
      })}
    </ul>
  );
}

export default App;
