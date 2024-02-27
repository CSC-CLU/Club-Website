import Board_Content from './board_content'
import FadeInUp from '../../fade_in_up';

function Board() {
    return (
        <FadeInUp>
            <div className="board-page">
                <Board_Content></Board_Content>
            </div>
        </FadeInUp>
    )
}

export default Board;