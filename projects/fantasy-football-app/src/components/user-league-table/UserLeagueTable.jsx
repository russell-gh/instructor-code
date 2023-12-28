import "..//..//App.css";

const UserLeagueTable = () => {
  return (
    <>
      <div className="mainContainerUl">
        <div className="userLeagueHeaderContainer">
          <h1 className="userLeagueHeader neonText">User League Table</h1>
        </div>
        <div className="userLeagueTableContainer">
          <table className="userLeagueTable">

            <thead>
              <tr>
                <td>Rank</td>
                <td>Team</td>
                <td>Manager</td>
              
                <td>TOT</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>-User Team Name</td>
                <td>-User Name-</td>
             
                <td>-Total Points-</td>
              </tr>
              <tr>
                <td>2</td>
                <td></td>
                <td></td>
           
                <td></td>
              </tr>
              <tr>
                <td>3</td>
                <td></td>
                <td></td>
               
                <td></td>
              </tr>
              <tr>
                <td>4</td>
                <td></td>
                <td></td>
               
                <td></td>
              </tr>
              <tr>
                <td>5</td>
                <td></td>
                <td></td>
               
                <td></td>
              </tr>
            </tbody>

          </table>
        </div>
      </div>
    </>
  );
};

export default UserLeagueTable;
