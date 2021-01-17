import axios from 'axios';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from './components/Button/Button';
function Home() {

    const [posts, setPosts] = useState([]);
    axios
        .get('/api/posts')             //リクエストを飛ばすpath
        .then(response => {
            setPosts(response.data);
        })                               //成功した場合、postsを更新する（then）
        .catch(() => {
            console.log('通信に失敗しました');
        });                             //失敗した場合(catch)
    axios
        .get('/api/posts')
        .then(response => {
            setPosts(response.data);
            console.log(response.data);

        })
    let rows = [];
    posts.map((rowData) =>
        rows.push({
            user_name: rowData.name,
            post: rowData.content,
            btn: <Button color="secondary" variant="contained" key={rowData.id} href={`/post/edit/${rowData.id}`}>編集</Button>,
            deleteBtn: <Button color="primary" variant="contained" href="/" onClick={() => deletePost(rowData)}>完了</Button>
        })
    );

    return (
        <TableBody>
            {rows.map((row, index) => (
                <TableRow key={index}>
                    {Object.keys(row).map(function (key, index) {
                        return (
                            <TableCell align="center" key={index}>{row[key]}</TableCell>
                        );
                    })}
                </TableRow>
            ))}
        </TableBody>
    )
}
export default Home;
