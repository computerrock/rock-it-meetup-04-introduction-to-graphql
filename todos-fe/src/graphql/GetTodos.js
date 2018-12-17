import {gql} from "apollo-boost";

const getTagsQuery = gql`
    query Todos($userId: Int!) {
        todos(userId: $userId) {
            id
            title
            isDone
            expireDate
            user {
                id
                username
            }
        }
    }
`;

export default getTagsQuery;
