import PromptCard from "./PromptCard";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className="w-full">
      <h1 className="head_text text_left">
        <span className="">{name}</span>
      </h1>
      <p className="desc text-left"></p>

      <div className="mt-10 prompt_layout">
        <div className="mt-10 prompt_layout">
          {data?.map((post) => (
            <PromptCard
              key={post._id}
              post={post}
              handleDelete={handleDelete && handleDelete(post)}
              handleEdit={handleEdit && handleEdit(post)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Profile;
