import React from 'react'
import { useSelector } from 'react-redux'
import TenantSelector from '../../../components/cipp/TenantSelector'
import CippDatatable from '../../../components/cipp/CippDatatable'

const columns = [
  {
    name: 'Name',
    selector: 'displayName',
    sortable: true,
  },
  {
    name: 'Default Domain',
    selector: 'defaultDomainName',
  },
  {
    name: 'M365 Portal',
    selector: 'customerId',
    //formatter: linkCog(
    //  (cell) =>
    //    `https://portal.office.com/Partner/BeginClientSession.aspx?CTID=${cell}&CSDEST=o365admincenter`,
    //),
  },
  {
    name: 'Exchange Portal',
    selector: 'defaultDomainName',
    //  formatter: linkCog(
    //  (cell) => `https://outlook.office365.com/ecp/?rfr=Admin_o365&exsvurl=1&delegatedOrg=${cell}`,
    // ),
  },
  {
    name: 'AAD Portal',
    selector: 'defaultDomainName',
    //   formatter: linkCog((cell) => `https://aad.portal.azure.com/${cell}`),
  },
  {
    name: 'Teams Portal',
    selector: 'defaultDomainName',
    //   formatter: linkCog((cell) => `https://admin.teams.microsoft.com/?delegatedOrg=${cell}`),
  },
  {
    name: 'Azure Portal',
    selector: 'defaultDomainName',
    //  formatter: linkCog((cell) => `https://portal.azure.com/${cell}`),
  },
  {
    name: 'MEM (Intune) Portal',
    selector: 'defaultDomainName',
    //   formatter: linkCog((cell) => `https://endpoint.microsoft.com/${cell}`),
  },

  // @todo not used at the moment?
  // {
  //   name: 'Domains',
  //   selector: 'defaultDomainName',
  // },
]

const MailboxClientAccessSettingsList = () => {
  const tenant = useSelector((state) => state.app.currentTenant)

  return (
    <div>
      <TenantSelector />
      <hr />
      <div className="bg-white rounded p-5">
        <h3>Mailbox Client Access Settings</h3>
        {Object.keys(tenant).length === 0 && <span>Select a tenant to get started.</span>}
        <CippDatatable
          keyField="id"
          reportName={`${tenant?.defaultDomainName}-Mailbox-Client-Access-Settings`}
          path="/api/ListMailboxCAS"
          columns={columns}
          params={{ TenantFilter: tenant?.defaultDomainName }}
        />
      </div>
    </div>
  )
}

export default MailboxClientAccessSettingsList