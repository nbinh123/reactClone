import React, { useEffect, useRef, useState } from "react";
import styles from "./podcast.module.scss"
import TagPodcast from "./tagPodcast/TagPodcast";

import getAPI from "../../../../ulti/fetchAPI/getAPI";
import postAPI from "../../../../ulti/fetchAPI/postAPI";
import { Link } from "react-router-dom"

function Podcast() {

  const [podcastList, setPodcastList] = useState([])

  useEffect(() => {
    getAPI("http://localhost:2222/podcastList", setPodcastList)
  }, [])

  const createPodcast = (data) => {
    postAPI("http://localhost:2222/podcastList", data)
  }

  return (
    <div>
      <Link to={"/podcast/create"}>
        <div className={styles.createPodcast}>
          <button>Thêm</button>
        </div>
      </Link>
      <div className={styles.podcast}>
        {podcastList.map((podcast, index) => <TagPodcast
          key={index}
          name={podcast.name}
          author={podcast.author}
          image={podcast.img}
          link={podcast.link}
        />
        )}
      </div>
    </div>
  );
}

export default Podcast;