import './Event.scss';
import orgLogo from '../images/horizon.png';
import personPortalIcon from '../images/Person Portal.svg';
import arrowRightIcon from '../images/arrowRight.svg';
import addCircle from '../images/add-circle.svg';
import { ReactComponent as Computer } from '../images/computer.svg';
import Button from '../ui-elements/Button';

function Event() {
  return (
    <div className="event-container">
        <div className="event-top">
          <div className="event-details">
            <img src={orgLogo} className="org-logo" alt="logo" />
            <div className="event-title">
              <h1 className="event-name">RainFocus Summit</h1>
              <h4 className="event-date">December 15th <br/>Lehi, Utah</h4>
            </div>
          </div>
          <Button text="EDIT EVENT"/>
        </div>
        <div className="event-setup-guide">
            <h2>Event setup guide</h2>
            <p>See the available list of modules below. We suggest that you start with the attendee module.</p>
        </div>
        <div className="attendee-setup">
          <div className="attendee-setup-header">
              <div className="person-portal-icon">
                <img src={personPortalIcon} className="" alt="person icon" />
              </div>
              <h3>Attendee</h3>

          </div>
          <div className="attendee-base-settings">
            <div className="base-settings-header">
                <h5><b>Step 1:</b> Base settings.</h5>
            </div>
            <div className="base-settings-bar">
                <div className="settings-bar-item">
                  <div className="item-header"><h5><b>General</b></h5></div>
                  <div className="item-text-box"><p>Define Attendee types & attributes</p></div>
                </div>
                <div className="settings-bar-item">
                  <div className="item-header"><h5><b>Title</b></h5></div>
                  <div className="item-text-box"><p>Description that explains the value goes here. Description that explains the value goes here.</p></div>

                </div>
                <div className="settings-bar-item">
                  <div className="item-header"><h5><b>Title</b></h5></div>
                  <div className="item-text-box"><p>Description that explains the value goes here. Description that explains the value goes here.</p></div>

                </div>
            </div>

          </div>
          <div className="attendee-registration-workflows">
              <div className="workflows-header">
                    <h5><b>Step 2:</b> Build registration workflows.</h5>
              </div>
              <div className="card-rows">
                <div className="card">
                  <div className="card-header"><img src={arrowRightIcon} className="card-icon" alt="person icon" /><b><h5>Attendee Registration</h5></b></div>
                  <div className="card-text-box"><p>Start by creating a general registration workflow</p></div>
                </div>
                <div className="card">
                  <div className="card-header"><img src={arrowRightIcon} className="card-icon" alt="person icon" /><b><h5>Attendee Registration</h5></b></div>
                  <div className="card-text-box"><p>Start by creating a general registration workflow</p></div>
                </div>
                <div className="card">
                  <div className="card-header"><img src={arrowRightIcon} className="card-icon" alt="person icon" /><b><h5>Attendee Registration</h5></b></div>
                  <div className="card-text-box"><p>Start by creating a general registration workflow</p></div>
                </div>
                <div className="card add-attendee">
                  <div className="card-header"><img src={addCircle} className="card-icon" alt="person icon" /></div>
                  <div className="card-text-box"><p>Add Registration Workflow</p></div>
                </div>
              </div>
          </div>
          <div className="attendee-registration-workflows">
              <div className="workflows-header">
                    <h5><b>Step 3:</b> Design post-registration experiences.</h5>
              </div>
              <div className="card-rows">
                <div className="card">
                  <div className="card-header"><Computer /><b><h5>Attendee Portal</h5></b></div>
                  <div className="card-text-box"><p>Manage the portal that attendees will see after they’ve register for your event.</p></div>
                </div>
              </div>
          </div>
        </div>
    </div>
  );
}

export default Event;