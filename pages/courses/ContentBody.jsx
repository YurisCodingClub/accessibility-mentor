import React from 'react'
import styles from "./TableOfContents.module.css";

const ContentBody = () => {
  return (
    <div>
      <div className={styles.texts}>
        <h2 id="heading1">Heading 1</h2>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?
        </p>
      </div>
      <div className={styles.texts}>
        <h2 id="heading2">Heading 2</h2>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
          distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
          cumque nihil impedit quo minus id quod maxime placeat facere possimus,
          omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
          autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
          eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
          Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
          voluptatibus maiores alias consequatur aut perferendis doloribus
          asperiores repellat.
        </p>
      </div>
      <div className={styles.texts}>
        <h3 id="heading3">Heading 3</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in
          neque at dui varius cursus feugiat ut magna. Sed eu magna tincidunt,
          suscipit nulla ac, vulputate magna. Sed sodales vitae ligula eu
          volutpat. Sed ac pharetra tellus, ac pellentesque ligula. Mauris a
          orci lobortis, pharetra lacus sit amet, vestibulum dui. Proin
          facilisis commodo lectus, id tincidunt quam pellentesque lobortis.
          Pellentesque tempor risus ac ante ultricies viverra. Aenean malesuada,
          dui sed euismod hendrerit, orci massa semper nisl, nec scelerisque
          nunc mauris nec libero. Phasellus sit amet turpis a ex laoreet auctor.
          Etiam ex lorem, gravida et enim id, mattis fringilla neque. Maecenas
          vel pharetra ligula, nec aliquam sem.
          <br />
          Donec condimentum lectus eros, ac finibus nunc consectetur eleifend.
          In vitae purus et velit dictum lacinia in id tortor. Praesent et enim
          vel nunc posuere cursus non ut nisi. Aliquam non bibendum tellus.
          Nullam pretium varius convallis. Aliquam tellus odio, semper at
          suscipit vel, aliquam congue nunc. Cras nec odio nisl. Donec vehicula,
          purus at accumsan viverra, nisi neque lacinia magna, ac consequat
          velit sem id ipsum. Nulla sapien urna, porta vel tempor molestie,
          mattis ut magna. Vestibulum suscipit nisl quis massa mollis, sit amet
          porta ex accumsan. Mauris mauris justo, eleifend id posuere id, tempor
          non magna. Maecenas dignissim augue vel augue pharetra porttitor.
          Aliquam aliquet molestie magna et bibendum.
          <br /> Sed eget velit id tortor placerat commodo. Vivamus condimentum
          nisi ante, at rutrum turpis sagittis a. Nam vel facilisis felis.
          Quisque varius urna ut justo auctor, eget euismod lorem facilisis.
          Etiam placerat lacus sem, sit amet tincidunt tellus cursus eu. Fusce
          ut elit faucibus, sodales magna nec, vulputate nunc. Sed euismod ex
          augue, sit amet varius tortor venenatis eget. Aliquam euismod varius
          sodales. Sed quis risus quis nisl congue ullamcorper nec lacinia
          justo.
        </p>
      </div>
    </div>
  );
};

export default ContentBody;