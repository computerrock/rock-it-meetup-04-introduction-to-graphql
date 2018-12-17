import {gql} from "apollo-boost";

const getTagsQuery = gql`
    query Tags {
        tags {
            id
            name
        }
    }
`;

export default getTagsQuery;
