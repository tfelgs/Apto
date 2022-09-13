import _ from "lodash";
import supplements from "../JSON/supplements.json";
import React, { Component } from "react";
import { Search, Grid, List, Segment, Placeholder } from "semantic-ui-react";

const initialState = { isLoading: false, results: [], value: "" };

export default class SearchExampleStandard extends Component {
  state = initialState;

  handleResultSelect = (e, { result }) =>
    this.setState({ value: result.title });

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState);

      const re = new RegExp(_.escapeRegExp(this.state.value), "i");
      const isMatch = (result) => re.test(result.title);

      this.setState({
        isLoading: false,
        results: _.filter(supplements, isMatch),
      });
    }, 300);
  };

  render() {
    const { isLoading, value, results } = this.state;

    return (
      <Grid centered columns={2}>
        <Grid.Row>
          <Grid.Column width={3}>
            <Search
              placeholder="Search for a supplement..."
              fluid
              loading={isLoading}
              onResultSelect={this.handleResultSelect}
              onSearchChange={_.debounce(this.handleSearchChange, 500, {
                leading: true,
              })}
              results={results}
              value={value}
            />
          </Grid.Column>
          <Grid.Column />
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={3}>
            <Segment>
              <List>
                {supplements.map((el) => {
                  return <List.Content>{el.title}</List.Content>;
                })}
              </List>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Placeholder>
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
