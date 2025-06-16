import React from 'react'

function DashboardWorking() {
  return (
      <div className="p-6 text-sm font-sans bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold">Support Ticket #10002</h1>
          <p className="text-gray-500 text-xs">
            Created September 24, 2014 - 01:04am | Claimed by Clark Kelly <a className="text-blue-500">Edit</a>
          </p>
        </div>
        <div className="flex space-x-2">
          <a className="border px-3 py-1 rounded text-sm">Archive</a>
          <a className="border px-3 py-1 rounded text-sm">Ticket Log</a>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="flex mb-6">
        <div className="flex-1 text-center bg-gray-200 p-2 rounded-l">Open</div>
        <div className="flex-1 text-center bg-yellow-300 p-2 font-medium">Working</div>
        <div className="flex-1 text-center bg-gray-200 p-2">Onsite Technician</div>
        <div className="flex-1 text-center bg-gray-200 p-2 rounded-r">Resolved</div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Left Column */}
        <div>
          {/* Customer Info */}
          <div className="bg-white shadow-sm p-4 rounded mb-6">
            <h2 className="font-semibold text-lg mb-2">Sterling Infotech</h2>
            <p>Client Site - 254/610 Alquans Rd</p>
            <p>Paul Jose</p>
            <p>61402872296</p>
            <p>info@sterlinginfotech.com</p>
            <a href="#" className="text-blue-500 text-xs">Edit Contact</a>
          </div>

          {/* Detail Section */}
          <div className="text-xs space-y-2 mb-6">
            <div className="flex justify-between border-b pb-1">
              <span className="text-gray-600">Site</span>
              <span className="text-blue-500 cursor-pointer">Client Site</span>
            </div>
            <div className="flex justify-between border-b pb-1">
              <span className="text-gray-600">Asset</span>
              <span className="text-black font-medium">024541</span>
            </div>
            <div className="border-b pb-1">
              <span className="text-gray-600">Warranty</span>
              <div className="flex gap-2 mt-1">
                <span className="bg-green-400 text-white px-2 py-1 rounded">WARRANTY</span>
                <span className="bg-gray-200 px-2 py-1 rounded">OUT OF WARRANTY</span>
                <span className="bg-gray-200 px-2 py-1 rounded">FOC</span>
              </div>
            </div>
            <div className="border-b pb-1">
              <span className="text-gray-600">Parts</span>
              <div className="flex gap-2 mt-1">
                <span className="bg-gray-200 px-2 py-1 rounded">PARTS REQUIRED</span>
                <span className="bg-gray-200 px-2 py-1 rounded">NO PARTS</span>
              </div>
            </div>
          </div>

          {/* Title and Description */}
          <div className="mb-6">
            <label className="block text-xs font-medium text-gray-700">Title</label>
            <input type="text" value="Event - 25th Aug" className="w-full border mt-1 p-2 rounded" readOnly />
            <label className="block text-xs font-medium text-gray-700 mt-3">Description</label>
            <textarea className="w-full border mt-1 p-2 rounded" rows="3" readOnly>text</textarea>
            <a href="#" className="text-blue-500 text-xs">Edit Description</a>
          </div>

          {/* Attachments */}
          <div className="mb-4">
            <p className="font-semibold mb-2">Attachments</p>
            <div className="border p-4 rounded text-center text-gray-400 text-xs">No files uploaded</div>
          </div>
        </div>

        {/* Right Column */}
        <div>
          {/* Time & Technicians */}
          <div className="bg-white shadow-sm p-4 rounded mb-6">
            <div className="flex justify-between mb-3">
              <div>
                <p className="font-semibold">Total Time</p>
                <p className="text-green-600">0hrs 0mins</p>
                <a href="#" className="text-blue-500 text-xs">View Time</a>
              </div>
              <div className="flex gap-2 items-start">
                <a className="border px-3 py-1 rounded text-sm">Start Timer</a>
                <a className="border px-3 py-1 rounded text-sm">Add Time</a>
              </div>
            </div>
            <p className="font-semibold">Technicians</p>
            <p>User1</p>
            <div className="flex gap-2 mt-2">
              <a className="border px-3 py-1 rounded text-sm">Add Technician</a>
              <a className="border px-3 py-1 rounded text-sm">Onsite Technician Required</a>
            </div>
          </div>

          {/* Comments */}
          <div className="bg-white shadow-sm p-4 rounded">
            <p className="font-semibold mb-2">Comments / Updates</p>
            <textarea placeholder="Start typing..." className="w-full border rounded p-2 h-24 mb-2" />
            <div className="mb-4">
              <p className="text-xs text-gray-500 mb-1">Save As:</p>
              <div className="flex gap-2">
                <a className="border px-3 py-1 rounded text-sm">Call</a>
                <a className="border px-3 py-1 rounded text-sm">Message</a>
                <a className="border px-3 py-1 rounded text-sm">Email</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ticket History Footer */}
      <div className="mt-10 bg-white p-4 rounded shadow-sm">
        <h3 className="font-semibold mb-2">Ticket History</h3>
        <table className="w-full text-left text-xs border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Asset</th>
              <th className="p-2 border">Site</th>
              <th className="p-2 border">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border">Event - 25th Aug</td>
              <td className="p-2 border">September 16, 2014</td>
              <td className="p-2 border">
                <span className="bg-yellow-300 px-2 py-1 rounded">Open</span>
              </td>
            </tr>
            <tr>
              <td className="p-2 border">Event - 25th Aug</td>
              <td className="p-2 border">September 24, 2014</td>
              <td className="p-2 border">
                <span className="bg-green-400 text-white px-2 py-1 rounded">Onsite Technician</span>
              </td>
            </tr>
            <tr>
              <td className="p-2 border"></td>
              <td className="p-2 border">May 14, 2015</td>
              <td className="p-2 border">
                <span className="bg-yellow-300 px-2 py-1 rounded">Open</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DashboardWorking