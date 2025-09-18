import { gql, useQuery } from "@apollo/client";
import { Lesson } from "./Lesson";

const GET_LESSONS_QUERY = gql`
  {
    listLesson {
      id
      lesson_type
      available_at
      title
      slug
    }
  }
`;

interface GetLessonsQueryResponse {
  listLesson: {
    id: string;
    title: string;
    slug: string;
    available_at: string;
    lesson_type: "RECORD" | "LIVE";
  }[];
}

export function Sidebar() {
  const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY);

  console.log(data);

  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Class schedule
      </span>
      <div className="flex flex-col gap-8">
        {data?.listLesson.map((lesson) => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.available_at)}
              type={lesson.lesson_type}
            />
          );
        })}
      </div>
    </aside>
  );
}
