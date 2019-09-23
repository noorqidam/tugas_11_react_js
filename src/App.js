import React, { Component } from 'react';
import "semantic-ui-css/semantic.min.css";
import { List, Loader, Dimmer, Placeholder, Segment, Grid, Divider, Header, Icon, Search, Button, Image } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div>
        <br />
        <Segment placeholder>
          <Grid columns={2} stackable textAlign='center'>
            <Divider vertical>Or</Divider>
            <Grid.Row verticalAlign='middle'>
              <Grid.Column>
                <Header icon>
                  <Icon name='search' />
                  Cari document
                </Header>
                <Search placeholder='Search document...' />
              </Grid.Column>
              <Grid.Column>
                <Header icon>
                  <Icon name='pdf file outline' />
                  Tambah Document Baru
              </Header>
                <Button primary>Create Document</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <br />
        <Segment>
          <Dimmer active>
            <Loader size='small'>Loading</Loader>
          </Dimmer>
          <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        </Segment>
        <br />
        <Grid>
          <Grid.Column width={5}>
            <Segment raised>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Paragraph>
              </Placeholder>
            </Segment>
          </Grid.Column>
          <Grid.Column width={7}>
            <Segment raised>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Paragraph>
              </Placeholder>
            </Segment>
          </Grid.Column>
          <Grid.Column width={4}>
            <List>
              <Header as='h3'>Website Terkait</Header>
              <List.Item icon='linkify' content={<a href='https://www.google.com'>Google</a>} />
              <List.Item icon='linkify' content={<a href='https://www.facebook.com'>Facebook</a>} />
              <List.Item icon='linkify' content={<a href='https://react.semantic-ui.com'>Semantic UI</a>} />
              <List.Item icon='linkify' content={<a href='http://www.niomic.com'>Niomic</a>} />
              <List.Item icon='linkify' content={<a href='https://www.reactjs.org'>React</a>} />
            </List>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
