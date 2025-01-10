import { Skeleton, Table } from "@radix-ui/themes"
import IssuesStatusBadge from "../components/IssuesStatusBadge"

import 'react-loading-skeleton/dist/skeleton.css'


const issues = [1,2,3,4,5]


const LoadingIssuesPage = () => {
  return (
    <Table.Root variant="surface">
    <Table.Header>
      <Table.Row>
        <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell className="hidden md:table-cell">Status</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell  className="hidden md:table-cell">Create</Table.ColumnHeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {issues.map(issue => (
        <Table.Row key={issue}>
            <Table.Cell>
             <Skeleton/>
              <div className="block md:hidden"><Skeleton/></div>
              </Table.Cell>
            <Table.Cell  className="hidden md:table-cell"><Skeleton/></Table.Cell>
            <Table.Cell  className="hidden md:table-cell"><Skeleton/></Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  </Table.Root>
  )
}

export default LoadingIssuesPage