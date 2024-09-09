import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ReactComponent as ImgVector } from "../images/ImgVector.svg";
import { useNavigate } from "react-router-dom";

function Submission() {
  const nevigate = useNavigate();
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [hackathonName, setHackathonName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [gitHub, setGitHub] = useState("");
  const [links, setLinks] = useState("");

  const formSubmitHandler = (e) => {
    let num = 0;
    e.preventDefault();
    console.log("getting submit....");
    const cardDetails = JSON.parse(localStorage.getItem("cardDetails")).filter(
      (cd) => cd.id.toString() !== id
    );
    localStorage.setItem(
      "cardDetails",
      JSON.stringify([
        {
          id: num + 1,
          title: title,
          summary: summary,
          description: description,
          image: `../images/${image}`,
          hackathonName: hackathonName,
          date: `uploaded just now`,
          startDate: startDate,
          endDate: endDate,
          github: gitHub,
          links: links,
        },
        ...cardDetails,
      ])
    );
    nevigate("/");
  };

  useEffect(() => {
    if (!id) return;

    const cardDetails = JSON.parse(localStorage.getItem("cardDetails")).filter(
      (card) => card.id.toString() === id
    )[0];
    // console.log(cardDetails.title);
    setTitle(cardDetails.title);
    setSummary(cardDetails.summary);
    setDescription(cardDetails.description);
    setImage(cardDetails.image);
    setHackathonName(cardDetails.hackathonName);
    setStartDate(cardDetails.startDate);
    setEndDate(cardDetails.endDate);
    setGitHub(cardDetails.gitHub);
    setLinks(cardDetails.links);
  }, [id]);

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const onImageChange = (e) => {
    setImage(e.target.files[0].name);
  };
  const onHackathonChange = (e) => {
    setHackathonName(e.target.value);
  };
  const onStartChange = (e) => {
    setStartDate(e.target.value);
  };
  const onEndChange = (e) => {
    setEndDate(e.target.value);
  };
  const onGitHubChange = (e) => {
    setGitHub(e.target.value);
  };
  const onLinksChange = (e) => {
    setLinks(e.target.value);
  };

  return (
    <div className="bg-[#F5F5F5]">
      <div className="md:px-20 md:py-10">
        <div>
          <div className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden ">
            <div className="w-full p-4 md:p-12 bg-white rounded-md md:pr-40">
              <h1 className="text-3xl font-semibold text-start uppercase my-16">
                Challenge Details
              </h1>
              <form className="mt-6" onSubmit={formSubmitHandler}>
                <div className="mb-12">
                  <label>
                    <span className="text-gray-700 text-xl">
                      Challenge Name
                    </span>
                    <input
                      type="text"
                      name="Title"
                      className="w-full block p-2 pl-4 mt-2 border-2 border-gray-300 rounded-md shadow-sm"
                      placeholder="Challenge Name"
                      value={title}
                      onChange={onTitleChange}
                    />
                  </label>
                </div>

                <div>
                  <label className="md:mr-12">
                    <span className="text-gray-700 text-xl">Start Date</span>
                    <input
                      type="date"
                      name="Date"
                      className="w-full block p-2 pl-4 mt-2 border-2 border-gray-300 rounded-md shadow-sm"
                      placeholder="Add start date"
                      value={startDate}
                      onChange={onStartChange}
                    />
                  </label>
                </div>
                <div>
                  <label>
                    <span className="text-gray-700 text-xl">End Date</span>
                    <input
                      type="date"
                      name="Date"
                      className="w-full block p-2 pl-4 mt-2 border-2 border-gray-300 rounded-md shadow-sm"
                      placeholder="Add end date"
                      value={endDate}
                      onChange={onEndChange}
                    />
                  </label>
                </div>

                <div className="mb-12">
                  <label>
                    <span className="text-gray-700 text-xl">Description</span>
                    <textarea
                      name="Description"
                      type="text"
                      className="block w-full mt-2 p-2 pl-4 border-2 border-gray-300 rounded-md shadow-sm"
                      placeholder="Description of your project"
                      rows="10"
                      value={description}
                      onChange={onDescriptionChange}
                    />
                  </label>
                </div>
                <div className="mb-12">
                  <label>
                    <span className="text-gray-700 text-xl">Image</span>
                    <div className="flex items-center justify-center">
                      <ImgVector className="absolute" />
                      <img
                        src={`../images/${image}`}
                        className="absolute w-[120px] rounded-md"
                        alt=""
                      />
                      <input
                        name="file-img"
                        type="file"
                        id="image"
                        className="block w-full mt-2 px-4 py-12 border-2 border-dashed border-[#CCCCCC] rounded-md shadow-sm bg-[#F5F5F5]"
                        // value={image}
                        onChange={onImageChange}
                      />
                    </div>
                  </label>
                </div>

                <div>
                  <div className="form-control w-full my-6">
                    <div className="label">
                      <span className="label-text">Level Type</span>
                    </div>
                    <select className="select select-bordered">
                      <option disabled value="default">
                        Select Category
                      </option>
                      <option value="easy">Easy</option>
                      <option value="medium">Medium</option>
                      <option value="hard">Hard</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <button
                    type="submit"
                    className=" text-xl
                                h-10 px-5 text-indigo-100 
                                bg-green-700 rounded-lg 
                                transition-colors duration-150 hover:bg-green-900 "
                  >
                    Upload Submission
                  </button>
                </div>
                <div></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Submission;
