import React, { useEffect } from "react";
import Tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import styles from "./homepage.module.scss"

import putAPI from "../../../../ulti/fetchAPI/putAPI";


function HomePage() {
    useEffect(() => {
       
    },[])









    return (
        <div className={styles.homepage}>
            <h1>Welcome to Nbinh's stories</h1>
            <p>Cuộc sống là một cuộc hành trình giúp chúng ta tìm ra những điều quan trọng, khám phá và trưởng thành. Tôi tin rằng mỗi chúng ta đều có câu chuyện riêng của mình về những trải nghiệm, suy nghĩ và cảm xúc trong cuộc sống. Và đó cũng chính là lý do tại sao tôi bắt đầu viết blog cá nhân của mìnhCuộc sống là một cuộc hành trình giúp chúng ta tìm ra những điều quan trọng, khám phá và trưởng thành. Tôi tin rằng mỗi chúng ta đều có câu chuyện riêng của mình về những trải nghiệm, suy nghĩ và cảm xúc trong cuộc sống. Và đó cũng chính là lý do tại sao tôi bắt đầu viết blog cá nhân của mình.</p>
            <p>Tôi mong muốn được chia sẻ những kinh nghiệm của mình, những câu chuyện thực tế và những góc nhìn cá nhân về cuộc sống. Từ những bài viết của tôi, bạn có thể tìm ra những thông tin hữu ích, các lời khuyên thiết thực để giải quyết những vấn đề trong cuộc sống hàng ngày của mình.</p>
            <p>Chủ đề mà tôi sẽ đề cập trong blog của mình rất đa dạng, từ sức khỏe, tâm lý, gia đình, tình yêu, cuộc sống hàng ngày đến công việc, khởi nghiệp và nhiều hơn nữa. Tôi hy vọng rằng khi ghé thăm blog của tôi, bạn sẽ cảm thấy được động lực, niềm tin và tràn đầy năng lượng để tiếp tục phát triển và trưởng thành.</p>
            <p>Hơn nữa, tôi mong muốn sự tương tác của các bạn, vì một trong những mục đích của việc viết blog cá nhân là chia sẻ và học hỏi từ nhau. Và tôi cho rằng một cộng đồng trao đổi bắt đầu từ những câu chuyện cá nhân của mỗi người.</p>
            <p>Cuối cùng, tôi muốn gửi lời cảm ơn tới các bạn đã ghé thăm blog của tôi. Hy vọng những bài viết của tôi sẽ mang đến cho bạn những ý tưởng mới, sự khám phá và trải nghiệm tuyệt vời trong cuộc sống này. Hãy cùng nhau trở thành những con người tốt hơn và hiểu rõ hơn về bản thân và cuộc sống xung quanh chúng ta. Chào mừng bạn đến với blog của tôi!</p>
        </div>);
}

export default HomePage;