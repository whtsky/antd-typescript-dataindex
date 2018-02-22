import { Table } from "antd";
import { ColumnProps } from "antd/lib/table";

interface Model {
  a: {
    b: number
  }
}

const columns: ColumnProps<Model>[] = [{
  key: 'a.b',
  title: 'b',
  dataIndex: 'a.b',
}];
