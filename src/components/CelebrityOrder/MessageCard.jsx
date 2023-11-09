import React, {useState} from 'react'

function MessageCard({message, onEdit}) {

    const [isEditing, setIsEditing] = useState(false);
    const [editedMessage, setEditedMessage] = useState(message);

    const handleEdit = () => {
      setIsEditing(true);
    };

    const handleSave = () => {
      onEdit(editedMessage);
      setIsEditing(false);
    };

  return (
    <div className="w-[95%] md:min-w-[275px] py-2 relative">
        <div className="absolute flex items-center justify-center bg-[#D42978] top-0 md:top-[-5px] right-[-5px] w-[20px] md:w-[30px] h-[20px] md:h-[30px] rounded-3xl cursor-pointer">
            <img src="/images/times.svg" alt="" className="max-w-[60%]" />
        </div>
      <div className="bg-[#292929] border border-[#D42978] text-white rounded-lg shadow-lg p-4">
        {isEditing ? (
          <textarea
            className="w-full border text-black rounded p-2"
            value={editedMessage}
            onChange={(e) => setEditedMessage(e.target.value)}
            style={{minHeight: '220px'}}
          />
        ) : (
          <p className="text-white text-lg overflow-y-scroll no-scrollbar" style={{height: '220px'}}>{message}</p>
        )}
      </div>

      <div className="flex items-center justify-between mt-3">
        <p className="text-sm">132 characters remaining</p>
          {isEditing ? (
            <span
              className="bg-white text-black px-4 py-1 rounded-3xl cursor-pointer"
              onClick={handleSave}
            >
              Save
            </span>
          ) : (
            <span
              className="flex items-center gap-1 bg-white text-black px-4 py-1 rounded-3xl cursor-pointer"
              onClick={handleEdit}
            >
                Edit
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 12 12" fill="none">
                    <path d="M10.5495 1.45013C10.41 1.30878 10.2438 1.19655 10.0606 1.11995C9.8773 1.04335 9.68066 1.00391 9.48205 1.00391C9.28343 1.00391 9.08679 1.04335 8.90354 1.11995C8.72029 1.19655 8.55408 1.30878 8.41455 1.45013L7.45455 2.42513L9.57455 4.54513L10.5345 3.58513C10.6769 3.44659 10.7903 3.28117 10.8682 3.09846C10.9461 2.91575 10.9869 2.71938 10.9883 2.52077C10.9897 2.32215 10.9516 2.12523 10.8763 1.94144C10.801 1.75765 10.6899 1.59065 10.5495 1.45013ZM6.74455 3.13513L2.54955 7.33013C2.51194 7.36879 2.47996 7.41256 2.45455 7.46013L1.06455 10.2651C1.02422 10.3408 1.00406 10.4257 1.00599 10.5114C1.00792 10.5972 1.03188 10.681 1.07557 10.7548C1.11926 10.8287 1.18121 10.89 1.25546 10.933C1.32972 10.9759 1.41377 10.999 1.49955 11.0001C1.57573 11.0004 1.65098 10.9833 1.71955 10.9501L4.52455 9.56013C4.57212 9.53472 4.61588 9.50274 4.65455 9.46513L8.84955 5.27013L6.74455 3.13513ZM10.4995 11.0001H5.99955C5.86694 11.0001 5.73976 10.9475 5.64599 10.8537C5.55223 10.7599 5.49955 10.6327 5.49955 10.5001C5.49955 10.3675 5.55223 10.2403 5.64599 10.1466C5.73976 10.0528 5.86694 10.0001 5.99955 10.0001H10.4995C10.6322 10.0001 10.7593 10.0528 10.8531 10.1466C10.9469 10.2403 10.9995 10.3675 10.9995 10.5001C10.9995 10.6327 10.9469 10.7599 10.8531 10.8537C10.7593 10.9475 10.6322 11.0001 10.4995 11.0001Z" fill="black"/>
                </svg>
            </span>
          )}
      </div>
    </div>
  )
}

export default MessageCard