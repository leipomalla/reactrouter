import React from "react";
import { Card, CardActions, CardContent, CardMedia } from "@material-ui/core";
import Button from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
const post = [
  {
    title: "wow",
    src:
      "https://image.freepik.com/free-vector/hello-friday-background-with-points_23-2147655166.jpg",
    text: "Yay, friday",

    id: 1
  },
  {
    title: "lol",
    src:
      "https://www.eatdrinkdeals.com/wp-content/uploads/2019/08/Friday-shutterstock_346968725.jpg",
    text: "Yay, friday",

    id: 2
  },
  {
    title: "hurray",
    src:
      "https://www.eatdrinkdeals.com/wp-content/uploads/2019/08/Friday-shutterstock_346968725.jpg",
    text: "Yay, friday",

    id: 3
  }
];

const Post = () => {
  return (
    <div style={{ marginTop: 200, padding: 20 }}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
        spacing={2}
      >
        {post.map(postitem => (
          <Grid item xs={3}>
            <Card key={postitem.id}>
              <CardMedia
                component="img"
                alt={postitem.title}
                height="200px"
                image={postitem.src}
              />
              <CardContent>
                <Typography>{postitem.title}</Typography>
              </CardContent>
              <CardActions></CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Post;
