import _ from "lodash";
import supplements from "../JSON/supplements.json";
import React, { Component } from "react";
import { Search, Grid, List, Segment } from "semantic-ui-react";

let initialState = {
	isLoading: false,
	results: [],
	value: "",
	result: [],
};

export default class SearchExampleStandard extends Component {
	state = initialState;

	handleResultSelect = (e, { result }) => {
		this.setState({ value: JSON.stringify(result.title), result: result });
	};

	ListSelect = (el, result) => {
		this.setState({ result: el });
		console.log(result);
	};

	handleSearchChange = (e, { value }) => {
		this.setState({ isLoading: true, value });

		setTimeout(() => {
			if (this.state.value.length < 1) return this.setState(initialState);

			let re = new RegExp(_.escapeRegExp(this.state.value), "i");
			let isMatch = (result) => re.test(result.title);

			this.setState({
				isLoading: false,
				results: _.filter(supplements, isMatch),
			});
		}, 300);
	};

	render() {
		let { isLoading, value, results, result } = this.state;

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
							<List link>
								{supplements.map((el) => {
									return (
										<List.Item
											as="a"
											onClick={(e) => {
												this.ListSelect(el);
											}}
											results={results}
											value={value}
										>
											<List.Content>{el.title}</List.Content>
										</List.Item>
									);
								})}
							</List>
						</Segment>
					</Grid.Column>
					<Grid.Column width={10}>
						<Segment basic>
							<h3 className="title">{result.title}</h3>
						</Segment>
						<Segment basic>
							<p>{result.description}</p>
						</Segment>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		);
	}
}
